# `/v1/users` API Docs

Schema for the `users` collection in the backend database.

DEV's Research Mentorship project currently only uses one `/v1/users` endpoint. This is because user, user type, user application, and user application information (fields) all share the same strict [one-to-one](https://en.wikipedia.org/wiki/One-to-one_(data_model)) relationsip with each other.

## :clipboard: Table of Contents

- [:rocket: Getting Started](https://backend-lite.docs.research.osu.dev#rocket-getting-started)
- [:open_file_folder: All User Fields](https://backend-lite.docs.research.osu.dev#open_file_folder-all-user-fields)
- [:busts_in_silhouette: User-Field Relationships](https://backend-lite.docs.research.osu.dev#busts_in_silhouette-user-field-relationships)

## :rocket: Getting Started

### :computer: For Developers

#### :eyes: Read the Docs

Make sure you can answer these questions and more by **carefully reading the docs multiple times**:

1. Which fields should I **CREATE** at `user sign-up` stage? And **why**?
2. Which fields should I **CREATE** at `user application` stage? And **why**?
3. Which fields should I **UPDATE** at `admin review and approval` stage? And **why**?
4. Given the schema, what **privileges** should each of the three `userTypes` have? And **why**?

#### :construction_worker: Try the Preview (Fake Data)

The backend preview *(prod code, fake data)* is live at: [https://api.research.preview-osu.dev](https://api.research.preview-osu.dev). Start by making a simple `GET` request to it via `curl` in your command-line:

```bash
curl -X GET https://api.research.preview-osu.dev/v1/users
```

A more comprehensive tutorial on utilizing this REST API is in the works, please be patient. **TODO**: [@KemingHe](https://github.com/KemingHe)

#### :speech_balloon: Talk to Your Dev Lead

**TODO**: [@KemingHe](https://github.com/KemingHe)

#### :bug: Docs Bug Report

To report anything from a `typpo` to `critical design change requests`, please submit a new issue at:

> [https://github.com/devosu/research-mentorship-backend-lite/issues/new](https://github.com/devosu/research-mentorship-backend-lite/issues/new)

### :tophat: For Stakeholders

**TODO**: [@KemingHe](https://github.com/KemingHe)

### :wave: For Others (Welcome!!)

**TODO**: [@KemingHe](https://github.com/KemingHe)

> Back to [Table of Content](https://backend-lite.docs.research.osu.dev#clipboard-table-of-content)

## :open_file_folder: ALL User Fields

| **Categories** | **Fields** | **JS Types** | **Data Types** | **Search** | **Notes** |
|---|---|---|---|---|---|
| **Basic Info** |  |  |  |  |  |
|  | **id** | `string` | id | :closed_lock_with_key: | exact |
|  | **creationTimestamp** | `string` | timestamp | :closed_lock_with_key: | asc/descend |
|  | **userType** | `string` | enum | :closed_lock_with_key: | single-select |
|  | **adminProved** | `boolean` | boolean | :closed_lock_with_key: | true/false/all |
|  | **emailAddress** | `string` | email | :closed_lock_with_key: :honeybee: | substring |
|  | **profilePictureLink** | `string` | URL | :x: | :x: |
| **Academic Info** |  |  |  |  |  |
|  | **firstName** | `string` | string | :honeybee: | substring |
|  | **lastName** | `string` | string | :honeybee: | substring |
|  | **academicYear** | `string` | enum | :ballot_box_with_check: | multi-select |
|  | **graduationYear** | `number` | year | :ballot_box_with_check: | range-select |
|  | **currentMajor** | `string` | enum | :honeybee: | substring |
|  | **preProfessionalRoute** | `string` | enum | :ballot_box_with_check: | multi-select |
| **Research Info** |  |  |  |  |  |
|  | **currentResearchFields** | `string` | string | :honeybee: | substring |
|  | **currentResearchDescription** | `string` | paragraph | :honeybee: | substring |
|  | **desiredResearchFields** | `string` | string | :honeybee: | substring |
|  | **calendarSchedulingLink** | `string` | URL | :x: | :x: |

### Search/Filter Legend

| **Icons** | **Meanings** | **Examples** |
|---|---|---|
| :closed_lock_with_key: | Admin Access Only | `Only admins can search users by internal ID.` |
| :x: | N/A to Search/Filter | `Nobody should earch mentors by their calerdar URL.` |
| :honeybee: | [Fuzzy Search/Filter](https://en.wikipedia.org/wiki/Approximate_string_matching) | `Typos like "cmputer" should resolve to match "computer".` |
| :ballot_box_with_check: | Selection Filter | `Single-select, multi-select, graduation year range etc.` |

### Field Enums (Options)

| **Fields** | **Enum/Options** |
|---|---|
| userType | `mentee`, `mentor`, `admin` |
| academicYear | `freshman (1st year)`, `sophomore (2nd year)`, `junior (3rd year)`, `senior (4+ year)`, plus `other` |
| currentMajor | `set of majors at OSU`, plus `other` |
| proProfessionalRoute | `set of pre-prof routes at OSU`, plus `other` |

> Back to [Table of Content](https://backend-lite.docs.research.osu.dev#clipboard-table-of-content)

## User-Field Relationships

|  |  | **User Types** | mentee | mentor | admin |
|---|---|---|---|---|---|
| **Categories** | **Fields** |  |  |  |  |
| **Basic Info** |  |  |  |  |  |
|  | id |  | :white_check_mark: :gear: | :white_check_mark: :gear: | :white_check_mark: :gear: |
|  | creationTimestamp |  | :white_check_mark: :gear: | :white_check_mark: :gear: | :white_check_mark: :gear: |
|  | userType |  | :white_check_mark: :necktie: | :white_check_mark: :necktie: | :white_check_mark: :label: |
|  | adminApproved |  | :white_check_mark: :hourglass_flowing_sand: | :white_check_mark: :hourglass_flowing_sand: | :x: |
|  | emailAddress |  | :white_check_mark: :fountain_pen: | :white_check_mark: :fountain_pen: | :white_check_mark: :label: |
|  | profilePictureLink |  | :white_check_mark: :fountain_pen: :grey_question:  | :white_check_mark: :fountain_pen: :grey_question:  | :white_check_mark: :label: :grey_question:  |
| **Academic Info** |  |  |  |  |  |
|  | firstName |  | :white_check_mark: :necktie: | :white_check_mark: :necktie: | :white_check_mark: :label: :grey_question: |
|  | lastName |  | :white_check_mark: :necktie: | :white_check_mark: :necktie: | :white_check_mark: :label: :grey_question: |
|  | academicYear |  | :white_check_mark: :necktie: | :white_check_mark: :necktie: | :x: |
|  | graduationYear |  | :white_check_mark: :necktie: | :white_check_mark: :necktie: | :x: |
|  | currentMajor |  | :white_check_mark: :necktie: | :white_check_mark: :necktie: | :x: |
|  | preProfessionalRoute |  | :white_check_mark: :necktie: :grey_question: | :white_check_mark: :necktie: :grey_question: | :x: |
| **Research Info** |  |  |  |  |  |
|  | currentResearchFields |  | :x: | :white_check_mark: :necktie: | :x: |
|  | currentResearchDescription |  | :x: | :white_check_mark: :necktie: | :x: |
|  | desiredResearchFields |  | :white_check_mark: :necktie: | :x: | :x: |
|  | calendarSchedulingLink |  | :x: | :white_check_mark: :hourglass_flowing_sand: | :x: |

### Relationship Legend

| **Icons** | **Meanings** | **Examples** |
|---|---|---|
| :white_check_mark: | Field **IS** relevant | `All users must be one of three userTypes.` |
| :grey_question: | Field is optional | `Mentors can optionally have a pre-prof (i.e. pre-med) route.` |
| :x: | Field is **NOT** relevant | `Mentees cannot have scheduling links.` |
| :gear: | Field is auto-generated | `All users are timestamped at account creation.` |
| :label: | Field is pre-set by other **Admins** | `Admin credentials are pre-determined.` |
| :fountain_pen: | Field is filled out during **Sign-Up** | `New mentees use their email to sign up.` |
| :necktie: | Field is filled out during **Application** | `New mentors describe their research during application.` |
| :hourglass_flowing_sand: | Field is set after **Admin Review** | `New mentors are assigned a scheduling link after approval.` |

> Back to [Table of Content](https://backend-lite.docs.research.osu.dev#clipboard-table-of-content)
