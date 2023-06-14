#!/usr/bin/env python3

from pathlib import Path
import argparse
import tarfile

ALLOWED_MODULES = ["html", "js", "uxui", "fwjs"]
ALUMNO = "ferradas_troitino_salvador"


def submit(module, ejercicio):
    if module not in ALLOWED_MODULES:
        raise ValueError(f"Variable {module} {ejercicio} does not match any allowed value. Stopping execution.")
    module = "html-css" if module == "html" else module
    folder = Path(f"src/{module}/") / Path(f"ejercicio-{ejercicio}")
    zipname = f"{module}_{ejercicio}_{ALUMNO}"
    print(f"File: {zipname}.tar.gz")
    make_tar_gz(zipname,  folder)


def make_tar_gz(zipname,  folder):
    with tarfile.open(Path.cwd() / f"{zipname}.tar.gz", "w:gz") as tar:
        tar.add(folder, arcname=folder.name, recursive=True)
        tar.close()


parser = argparse.ArgumentParser()
parser.add_argument("module", choices=ALLOWED_MODULES, help="Module name")
parser.add_argument("ejercicio", type=int, help="Ejercicio number")
args = parser.parse_args()

submit(args.module, args.ejercicio)
