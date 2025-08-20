const axios = require("axios");
const URL = "http://20.244.56.144/evaluation-service/logs";
async function Log() {
  const body = {
    stack: "backend",
    level: "info",
    package: "handler",
    message: "received sucessfully",
  };
try {
    const res = await axios.post(URL, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMjEyMDkzQG5lYy5lZHUuaW4iLCJleHAiOjE3NTU2NzA3MTgsImlhdCI6MTc1NTY2OTgxOCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6Ijg0OGQ4OGZmLTVjOTctNDNlMi1iNWRiLTlhZjNjNjQ2YWFhMCIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InBldGNoaXBhbmRpIHMiLCJzdWIiOiIxYTFmYjUwNC1hODAxLTQ4ZTQtYmU4NS03MDFmMzBjN2NmYmUifSwiZW1haWwiOiIyMjEyMDkzQG5lYy5lZHUuaW4iLCJuYW1lIjoicGV0Y2hpcGFuZGkgcyIsInJvbGxObyI6IjIyMTIwOTMiLCJhY2Nlc3NDb2RlIjoieHNaVFRuIiwiY2xpZW50SUQiOiIxYTFmYjUwNC1hODAxLTQ4ZTQtYmU4NS03MDFmMzBjN2NmYmUiLCJjbGllbnRTZWNyZXQiOiJmSlZLc0dteHJ5ekZzTUttIn0.NFnXv-PFrFqCpTEU3RI6rscRCB_u-4ehG3BoU9nAR6E",
      },
    });

  } catch (err) {
    console.error("Error logging:", err.response?.data || err.message);
  }
}
Log()
