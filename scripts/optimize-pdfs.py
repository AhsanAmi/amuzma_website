"""Linearize and recompress the catalogue PDFs in public/assets/documents.

Linearized (fast web view) PDFs let browsers render the first page via HTTP
range requests instead of downloading the whole file first, which is what
made the catalogue links feel slow. Run after adding or replacing any PDF:

    python scripts/optimize-pdfs.py
"""

import sys
from pathlib import Path

import pikepdf

DOCS_DIR = Path(__file__).resolve().parent.parent / "public" / "assets" / "documents"


def optimize(path: Path) -> None:
    before = path.stat().st_size
    tmp = path.with_suffix(".tmp.pdf")

    with pikepdf.open(path) as pdf:
        pdf.save(
            tmp,
            linearize=True,
            compress_streams=True,
            recompress_flate=True,
            object_stream_mode=pikepdf.ObjectStreamMode.generate,
        )

    tmp.replace(path)
    after = path.stat().st_size
    print(f"{path.name}: {before / 1e6:.2f} MB -> {after / 1e6:.2f} MB")


def main() -> int:
    pdfs = sorted(DOCS_DIR.glob("*.pdf"))
    if not pdfs:
        print(f"No PDFs found in {DOCS_DIR}", file=sys.stderr)
        return 1

    for pdf_path in pdfs:
        try:
            optimize(pdf_path)
        except Exception as exc:  # noqa: BLE001 - report and continue
            print(f"{pdf_path.name}: FAILED ({exc})", file=sys.stderr)

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
