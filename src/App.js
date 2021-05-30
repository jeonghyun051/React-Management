import './App.css';

import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = {
  root: {
    width: '100%',
    overflowX: "auto"
  },
  table: {
    minWidth: 1080,
  }
};

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
    <Paper className={styles.root}>
      <Table className={styles.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>

        {/* 테이블이 화면에 꽉차게 해줌 */}
        <TableBody> 
          {customers.map((customer) => (
            <Customer customer={customer} />
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default App;