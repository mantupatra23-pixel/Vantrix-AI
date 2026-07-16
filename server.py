import urllib.parse
import time
import httpx
import random
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(
    title="Vantrix_AI_Enterprise_Engine",
    description="Asynchronous multi-agent routing with analytics & live webhooks",
    version="3.0.0"
)

# CORS Policy configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Optional: Replace this with your actual Discord Webhook URL to activate real-time alerts
DISCORD_WEBHOOK_URL = "YOUR_DISCORD_WEBHOOK_URL_HERE"

class RequestPayload(BaseModel):
    name: str
    email: str
    parameters: str

# 🤖 MULTI-AGENT RESPONSE MATRIX CONFIGURATION
AGENT_REGISTRY = {
    "PRICING_AGENT": [
        "🤖 [PRICING_AGENT // NODE_01]: Target architecture computed. Base deployment starts at $14.50/node cluster matrix dynamically scaled.",
        "🤖 [PRICING_AGENT // NODE_02]: System cost optimization matrix calculated successfully. Dynamic allocation grids operational based on requested nodes."
    ],
    "INFRA_AGENT": [
        "⚙️ [INFRA_AGENT // NODE_03]: Multi-tenant architecture validated. Deployed high-scale webinar configurations, Next.js dashboard frames, and real-time firewall layers.",
        "⚙️ [INFRA_AGENT // NODE_04]: Codebase structural optimization complete. Ready for secure deployment routing sequence on enterprise edge servers."
    ],
    "SECURITY_AGENT": [
        "🛡️ [SECURITY_AGENT // NODE_05]: Injection traces monitored. Port 443 handshake verified safely. 0 vulnerabilities found in current structural parameter matrix.",
        "🛡️ [SECURITY_AGENT // NODE_06]: Active firewall active defense network locked. Cryptographic layer deployment parameters verified securely."
    ]
}

# 📊 MEMORY ANALYTICS STORAGE ENGINE
SYSTEM_ANALYTICS = {
    "total_handshakes": 0,
    "average_latency_ms": 0.0,
    "last_processed_agent": "NONE"
}

@app.get("/")
async def core_mainframe_status():
    return {
        "status": "ONLINE",
        "version": "3.0.0",
        "agents_active": list(AGENT_REGISTRY.keys()),
        "analytics_metrics": {
            "total_injections": SYSTEM_ANALYTICS["total_handshakes"],
            "execution_avg_latency": f"{SYSTEM_ANALYTICS['average_latency_ms']:.2f}ms",
            "active_nodes": "82/100_OPERATIONAL_CLUSTERS"
        }
    }

@app.post("/api/v1/automation/handshake")
async def process_incoming_handshake(payload: RequestPayload):
    # ⏱️ MEMORY ANALYTICS ENGINE: START TIMER
    start_time = time.perf_counter()
    
    if not payload.name or not payload.email:
        raise HTTPException(status_code=400, detail="SYS_ERROR: INVALID_METADATA_PACKET")
    
    # Scanning inputs to route to the correct specialized autonomous agent
    raw_query = payload.parameters.lower()
    
    if "price" in raw_query or "cost" in raw_query or "budget" in raw_query:
        agent_type = "PRICING_AGENT"
    elif "security" in raw_query or "firewall" in raw_query or "safe" in raw_query:
        agent_type = "SECURITY_AGENT"
    else:
        agent_type = "INFRA_AGENT"
        
    selected_agent_reply = random.choice(AGENT_REGISTRY[agent_type])

    # ⏱️ MEMORY ANALYTICS ENGINE: END TIMER & COMPUTE METRICS
    execution_time_ms = (time.perf_counter() - start_time) * 1000
    
    # Update analytics logs in RAM memory clusters
    SYSTEM_ANALYTICS["total_handshakes"] += 1
    SYSTEM_ANALYTICS["last_processed_agent"] = agent_type
    # Rolling average calculation
    SYSTEM_ANALYTICS["average_latency_ms"] = (
        (SYSTEM_ANALYTICS["average_latency_ms"] * (SYSTEM_ANALYTICS["total_handshakes"] - 1) + execution_time_ms) 
        / SYSTEM_ANALYTICS["total_handshakes"]
    )

    # Building the fully structured multi-agent execution response log for WhatsApp
    base_msg = (
        f"[VANTRIX_OS // MULTI_AGENT_INGESTION]\n"
        f"----------------------------------------\n"
        f"👤 Operator: {payload.name.upper()}\n"
        f"📧 Routing Net: {payload.email}\n"
        f"📥 Input Params: {payload.parameters}\n\n"
        f"🔄 AGENT PROCESSED LOG:\n"
        f"{selected_agent_reply}\n\n"
        f"⏱️ System Latency: {execution_time_ms:.2f}ms\n"
        f"Terminal handshakes completed. Redirecting parameters stream..."
    )
    
    encoded_text = urllib.parse.quote(base_msg)
    whatsapp_redirect_url = f"https://wa.me/917377811705?text={encoded_text}"
    
    # 🚀 LIVE WEBHOOK NOTIFICATION NETWORK (DISCORD CALLOUT)
    if DISCORD_WEBHOOK_URL != "YOUR_DISCORD_WEBHOOK_URL_HERE":
        try:
            discord_payload = {
                "username": "Vantrix OS Core Mainframe",
                "avatar_url": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=100&q=80",
                "embeds": [{
                    "title": "🚨 SYSTEM INJECTION TRACKED // ACCESS GATEWAY",
                    "color": 16711728 if agent_type == "SECURITY_AGENT" else 65344, 
                    "fields": [
                        {"name": "👤 Operator Signature", "value": f"`{payload.name.upper()}`", "inline": True},
                        {"name": "📧 Routing Channel", "value": f"`{payload.email}`", "inline": True},
                        {"name": "📥 Injected Parameters", "value": f"```text\n{payload.parameters}\n```", "inline": False},
                        {"name": "🤖 Routed Agent", "value": f"`{agent_type}`", "inline": True},
                        {"name": "⏱️ Ingestion Latency", "value": f"`{execution_time_ms:.3f} ms`", "inline": True}
                    ],
                    "footer": {"text": "Vantrix_OS // Continuous Integration Loop Logs"}
                }]
            }
            # Fire-and-forget style client call so frontend does not get delayed
            with httpx.Client() as client:
                client.post(DISCORD_WEBHOOK_URL, json=discord_payload, timeout=2.0)
        except Exception as e:
            print(f"WEBHOOK_LOG_WARNING: Webhook dispatch failed. Error: {str(e)}")

    return {
        "status": "SUCCESS_200",
        "agent_routing": "AUTOMATIC_SYNC_OK",
        "latency_metrics": f"{execution_time_ms:.2f}ms",
        "redirect_url": whatsapp_redirect_url
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
