
def capitalize(s,ind):
    s = list(s)
    for i in ind:
        if i <= len(s):
            s[i] = s[i].upper()
    
    return ''.join(s)
