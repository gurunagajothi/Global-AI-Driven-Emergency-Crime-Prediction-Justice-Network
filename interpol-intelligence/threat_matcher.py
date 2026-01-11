def match_threat(person_id, alerts):
    for a in alerts:
        if a["suspect"] == person_id:
            return "⚠️ INTERPOL MATCH FOUND"
    return "CLEAR"
