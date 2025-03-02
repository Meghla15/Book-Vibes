import UseLocalStorage from "../Hooks/UseLocalStorage";
import useBooksCartData from "../Hooks/useBooksCartData";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const PagesToLoad = ({item}) => {
    const {cardData} = useBooksCartData()
    const {localData} = UseLocalStorage()
   

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const data = [
  {
    name: 'To Kill a Mockingbird',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "George Orwell",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Pride and Prejudice",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "The Great Gatsby",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Moby-Dick",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "The Lord of the Rings",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
    
    
        return (
            <BarChart className="container mx-auto lg:w-[1000px] w-[500px]"
            width={1000}
          height={500}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      );
    }
  
    


export default PagesToLoad;