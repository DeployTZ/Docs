---
title: "Shipfile"
---

A Shipfile is a simple YAML configuration file that automates your application deployment. It specifies setup commands and runtime instructions for your app.

## Basic Structure

```yaml
script: <pre-run commands>
run: <entrypoint command>
```

## Key Commands

### script (Pre-run Commands)

- Runs before your main application starts

- Use for dependencies, migrations, or setup

- Supports single or multi-line commands

1. Single-line:

```yaml
script: python manage.py migrate
```

2. Multi-line:

```yaml
script: |
  pip install -r requirements.txt
  alembic upgrade head
```

### run (Entrypoint)

- Mandatory command to start your application, for example:

```yaml
run: python main.py
```

<Note>The `run` command is always one line.</Note>

### Important Notes For Webservers

- Since the applications will run in their own isolated environment, you need to specify the `HOST` and `PORT`

- The `HOST` must be `0.0.0.0`

- Ports will be auto-detected from any of these patterns:

```
--port=8000 / --port 8000

-p=8000 / -p 8000

:8000

PORT=8000
```

- Default port: 8000 if none detected

## Some Examples:

### FastAPI

```yaml
script: |
  pip install -r requirements.txt
  alembic upgrade head
run: uvicorn main:app --host 0.0.0.0 --port 8000
```

### Django

```yaml
script: |
  python manage.py makemigrations
  python manage.py migrate
run: gunicorn myproject.wsgi:application --bind 0.0.0.0:8000
```

### Node.js

```yaml
script: npm install
run: node server.js --port 3000
```

<Tip>More examples are available in the [examples](/examples) section</Tip>
