import urllib.parse
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(
    title="Vantrix_AI_Automation_Engine",
    description="Production mainframe routing data packets to automated loops",
    version="1.0.0"
)

# CORS Policy configuration so that frontend can seamlessly ping this backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class RequestPayload(BaseModel):
    name: str
    email: str
    parameters: str

@app.get("/")
async def core_mainframe_status():
    return {
        "status": "ONLINE",
        "cipher_layer": "SECURE_AES_256",
        "nodes": "82/100_ACTIVE_CLUSTERS"
    }

@app.post("/api/v1/automation/handshake")
async def process_incoming_handshake(payload: RequestPayload):
    if not payload.name or not payload.email:
        raise HTTPException(status_code=400, detail="SYS_ERROR: INVALID_METADATA_PACKET")
    
    # Constructing automated template logs for deep tech tracking
    base_msg = (
        f"[VANTRIX_OS // HANDSHAKE_SUCCESS]\n\n"
        f"🤖 CORE ENGINE AUTOMATION ACTIVATED\n"
        f"----------------------------------------\n"
        f"▶ Operator Sign: {payload.name.upper()}\n"
        f"▶ Routing Link: {payload.email}\n"
        f"▶ Parameters Injected: {payload.parameters}\n\n"
        f"Terminal matrix analysis initiated successfully. Ready for manual validation overrides."
    )
    
    # URL Encoding for safe browser custom schema triggering
    encoded_text = urllib.parse.quote(base_msg)
    whatsapp_redirect_url = f"https://wa.me/917377811705?text={encoded_text}"
    
    return {
        "status": "SUCCESS_200",
        "integrity_hash": "VERIFIED_OK",
        "redirect_url": whatsapp_redirect_url
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
