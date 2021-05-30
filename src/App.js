import './App.css';
import Customer from './components/Customer';

const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name':  '홍길동',
  'birthday': '19951227',
  'gender': '남자',
  'job':'대학생'
  },
  {
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name':  '김정현',
  'birthday': '19951227',
  'gender': '남자',
  'job':'대학생'
  }
]

const App = () => {
  return (
    <div>
      {customers.map((customer) => (
        <Customer customer={customer} />
      ))}
      </div>
  );
}

export default App;