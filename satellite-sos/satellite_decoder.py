def decode(message):
    parts = message.split("|")
    return {"type": parts[0], "lat": parts[1], "lon": parts[2]}

print(decode("SOS|12.97|77.59"))
