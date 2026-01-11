def encode_sos(lat, lon):
    return f"SOS|{lat}|{lon}"

print(encode_sos(12.9716, 77.5946))
