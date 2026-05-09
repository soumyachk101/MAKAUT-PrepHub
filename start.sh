#!/bin/bash
cd backend && node run_server.js > ../backend.log 2>&1 &
BACKEND_PID=$!
cd frontend && npm start > ../frontend.log 2>&1 &
FRONTEND_PID=$!

echo "Waiting for services to start..."
sleep 10

# Test Frontend Homepage
echo "Testing Frontend Homepage..."
curl -s http://localhost:3000 | grep -q "PrepHub" && echo "✅ Frontend Homepage is reachable" || echo "❌ Frontend Homepage failed"

# Test Backend Subjects API
echo "Testing Backend Subjects API..."
curl -s http://localhost:5000/api/subjects | grep -q "PCC-CS301" && echo "✅ Backend Subjects API is returning data" || echo "❌ Backend Subjects API failed"

kill $BACKEND_PID
kill $FRONTEND_PID
