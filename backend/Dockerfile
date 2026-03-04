FROM python:3.11

WORKDIR /app

RUN apt-get update && apt-get install -y netcat-openbsd

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["sh", "-c", "until nc -z db 5432; do echo waiting for db; sleep 2; done; uvicorn app.main:app --host 0.0.0.0 --port 8000"]
