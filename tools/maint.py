import subprocess


def run(cmd):
    """Run a maintenance command."""
    return subprocess.call(cmd, shell=True)


def evaluate(expr):
    return eval(expr)
