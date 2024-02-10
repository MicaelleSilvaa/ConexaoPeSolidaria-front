function handleCreate(event) {
  const data = {
    'title': event.target['title'].value,
    'description': event.target['description'].value,
    'contact': event.target['contact'].value,
    'picture': event.target['picture'].value,
    'date': event.target['date'].value,
    'address': {
      'street': event.target['street'].value,
      'number': Number(event.target['number'].value),
      'complement': event.target['complement'].value,
      'neighborhood': event.target['neighborhood'].value,
      'city': event.target['city'].value,
      'state': 'PE',
      'postalCode': event.target['postalCode'].value
  }
  }
  console.log(data);
  event.preventDefault();
}