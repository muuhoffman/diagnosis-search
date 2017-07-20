def read_diagnoses(filename):
    with open(filename) as f:
        content = f.readlines()
    content = [x.strip() for x in content]
    return content
