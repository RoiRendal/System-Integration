# Academic Information System (IAS) – Legacy Version
This repository contains a legacy Academic Information System used internally by the institution since 2018.
The system manages student profiles, course catalog, enrollment records, and grading.

## System Overview
The IAS is composed of four internal subsystems:

- Student Profile Management
- Course Management
- Enrollment Record Management
- Grading System

## Data Considerations
- Each module maintains its own data model.
- No global schema enforcement exists across modules.
- Identifier formats may vary.
- Term naming conventions are not standardized.
- Cross-module validation is limited.

## API Overview

Each subsystem exposes REST-like endpoints.
- Student profile management
``` Bash
GET /api/students
GET /api/students/{id}
POST /students
```

- Course management
``` Bash
GET /api/course
POST /api/course
```

- Enrollment record management
``` Bash
GET /api/enrollment
GET /api/enrollment/{studentId}
POST /enrollment
```

- Grading system
``` Bash
GET /api/grade
GET /api/grade/{studentId}
POST /api/grade
```

## Academic Exercise Context

This system is intentionally designed to simulate a legacy environment.

Students are expected to:
- Analyze system boundaries
- Identify inconsistencies
- Propose integration strategies
- Recommend modernization approaches

Check the system [here](https://ais-simulated-legacy.onrender.com/api/students) for more information.

