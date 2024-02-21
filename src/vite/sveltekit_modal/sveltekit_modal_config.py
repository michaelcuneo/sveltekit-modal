import modal

# Make this as basic as possible for now and expand on it later if I get this working.
config = {
    'name': 'sveltekit-test-example',
    'log': False,
    'stub_asgi': {
        'image': modal.Image.debian_slim()
    }
}