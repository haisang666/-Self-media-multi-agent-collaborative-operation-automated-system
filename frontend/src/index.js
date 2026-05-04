import React from 'react';
import {createRoot} from 'react-dom/client';

function Card({title,children}){return <div style={{border:'1px solid #ddd',padding:16,borderRadius:12,marginBottom:12}}><h3>{title}</h3>{children}</div>}
function App(){
 const [content,setContent]=React.useState('');
 React.useEffect(()=>{fetch('/api/agents').catch(()=>{})},[])
 const gen=async()=>{
  const r=await fetch('http://localhost:8000/api/content',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({goal:'涨粉获客'})});
  const j=await r.json(); setContent(j.title+"\n"+j.body);
 }
 return <div style={{fontFamily:'sans-serif',padding:24,maxWidth:900,margin:'0 auto'}}>
 <h1>自媒体多Agent协同运营系统</h1>
 <Card title="Agent状态">数据Agent / 内容Agent / 获客Agent / 客服Agent 均在线</Card>
 <Card title="一键生成内容"><button onClick={gen}>生成爆款内容</button><pre>{content}</pre></Card>
 <Card title="数据分析">粉丝增长12%，最佳发布时间20:00，热门主题AI变现</Card>
 <Card title="自动获客">今日新增线索35，优质线索12</Card>
 </div>
}
createRoot(document.getElementById('root')).render(<App/>);
