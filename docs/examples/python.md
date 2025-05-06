# Python

## Simple Python

```
run: python main.py
```

## FastAPI

```
script:
  pip install -r requirements.txt
  alembic upgrade head
run: uvicorn main:app --host 0.0.0.0 --port 8000
```

## Django

```
script:
  python manage.py makemigrations
  python manage.py migrate
run: gunicorn myproject.wsgi:application --bind 0.0.0.0:8000
```
