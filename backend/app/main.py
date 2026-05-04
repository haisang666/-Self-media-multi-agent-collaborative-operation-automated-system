from fastapi import FastAPI
from pydantic import BaseModel
app=FastAPI(title="多Agent运营系统")

class Task(BaseModel):
    goal:str

@app.get("/health")
def health():
    return {"status":"ok"}

@app.post("/api/analyze")
def analyze():
    return {"followers_growth":"12%","best_time":"20:00","top_topic":"AI变现"}

@app.post("/api/content")
def content(task:Task):
    return {
      "title":"7天涨粉1000的内容策略",
      "body":f"根据目标 {task.goal} 生成的爆款内容脚本..."
    }

@app.post("/api/leads")
def leads():
    return {"new_leads":35,"qualified":12}

@app.post("/api/support")
def support():
    return {"reply":"您好，已收到您的咨询，我们会尽快联系您。"}

@app.get("/api/agents")
def agents():
    return [
      {"name":"数据Agent","status":"运行中"},
      {"name":"内容Agent","status":"运行中"},
      {"name":"获客Agent","status":"运行中"},
      {"name":"客服Agent","status":"运行中"},
    ]
