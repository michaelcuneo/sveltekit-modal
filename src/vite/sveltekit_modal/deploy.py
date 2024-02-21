import sys
from .app import stub
from .sveltekit_modal_config import config
from modal import runner

class Logger(object):
    def __init__(self, stream):
        self.stream = stream

    def __getattr__(self, attr_name):
        return getattr(self.stream, attr_name)

    def write(self, data):
        if config.get('log'):
            sys.stderr.write(str(data))
            sys.stderr.flush()

        self.stream.write(str(data))
        self.stream.flush()

    def flush(self):
        self.stream.flush()


if __name__ == '__main__':
    runner.deploy_stub(stub)