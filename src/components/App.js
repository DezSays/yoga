import React, {useState} from 'react'
import '../App.css';
import { useDispatch, useSelector} from 'react-redux'
import incrementCount from '../actions/incrementCount.js' 
import decrementCount from '../actions/decrementCount.js'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  const [englishName, setEnglishName] = useState('')
  const [sanskritName, setSanskritName] = useState('')
  const [img, setImg] = useState('')
  const dispatch = useDispatch()
  const count = useSelector(state => state.count)

  const yogaPoses = async() => {
    const fetchYogaPoses = await fetch('https://raw.githubusercontent.com/rebeccaestes/yoga_api/master/yoga_api.json')
    const data = await fetchYogaPoses.json()
    let idVal = data[count].id
    let engName = data[count].english_name
    let sansName = data[count].sanskrit_name
    let img_url = data[count].img_url

    console.log(idVal,engName,sansName,img_url)
    setEnglishName(engName)
    setSanskritName(sansName)
    setImg(img_url)

  }


yogaPoses()

  return (
  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img}  alt={englishName} />
      <Card.Body>
        <Card.Title>{englishName}</Card.Title>
        <Card.Text>
          The Sanskrit name for this pose is {sanskritName}.
        </Card.Text>
        <Button onClick={() => dispatch(decrementCount(1))} variant="primary">Previous</Button>
        <Button onClick={() => dispatch(incrementCount(1))} variant="primary">Next</Button>
      </Card.Body>
    </Card>

  );
}

export default App;
