import re, string

class Diagnoses:

    def __init__(self):
        self.diagnoses = []  # The list of original terms

    def addDiagnoses(self, diagnoses):
        for diagnosis in diagnoses:
            self.addDiagnosis(diagnosis)

    def addDiagnosis(self, diagnosis):
        self.diagnoses.append(Diagnosis(diagnosis))

    def searchDiagnoses(self, searchText):
        results = []
        for diagnosis in self.diagnoses:
            rank = diagnosis.get_rank(searchText)
            if rank != None:
                results.append((rank, diagnosis.value))
        results.sort(key=lambda x: x[0])
        return results

class Diagnosis:
    def __init__(self, diagnosis):
        self.value = diagnosis
        pattern = re.compile('([^\s\w]|_)+')
        self.value_search = pattern.sub('', diagnosis).lower()
        print(self.value_search)

    def get_rank(self, searchText):
        index = self.value_search.find(searchText)
        if index == -1:  # if searchText does not exist
            return None
        if index > 0 and self.value_search[index-1] == ' ': # if there is a space before the searchText
            return 0.5 # almost same as being at the front
        return index
        