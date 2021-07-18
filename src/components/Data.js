const Rows=[]
 for (var i=1;i<=20;i++){
 Rows.push(i)
 }

const GradePoint=[
  {Grade:'-', Point: 0},
  {Grade:'A+', Point: 9},
  {Grade:'A', Point: 8},
  {Grade:'B+', Point: 7},
  {Grade:'B', Point: 6},
  {Grade:'C+', Point: 5},
  {Grade:'C', Point:4},
  {Grade:'D+',Point:3},
  {Grade:'D', Point:2},
  {Grade:'E', Point:1},
  {Grade:'F', Point:0},
]

const Credits =[0,1,3,4,6,8,12]

const Data={'Rows': Rows, 'GradePoint': GradePoint, 'Credits': Credits}

export default Data;

