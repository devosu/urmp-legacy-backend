# :bust_in_silhouette: `/v1/users` API Docs

As of writing (06/19/24), DEV's Research Mentorship project only uses one REST API endpoint: `/v1/users`.

Our [Flat-File](https://www.geeksforgeeks.org/flat-file-database/#) design is based on the fact that each `user` in the system will only have **ONE** application (and approval status), plus **ONE** set of academic information. Therefore, we can integrate and store `application`-related fields directly in the `user` profile. This eliminates complex referencing across collections, allowing for lightning-fast data access and querying.

> **TODO**: @KemingHe benchmark the system's performance.

## :clipboard: Table of Contents

- [:rocket: Quick Start](https://github.com/devosu/research-mentorship-backend-lite/blob/main/docs/schemas/users/v1-users-schema.md#rocket-quick-start)
- [:open_file_folder: `user` Fields](https://github.com/devosu/research-mentorship-backend-lite/blob/main/docs/schemas/users/v1-users-schema.md#open_file_folder-user-fields)
- [:busts_in_silhouette: Populating the Fields](https://github.com/devosu/research-mentorship-backend-lite/blob/main/docs/schemas/users/v1-users-schema.md#busts_in_silhouette-populating-the-fields)

## :rocket: Quick Start

> [!NOTE]
> If you discovered any `tyypo` or wish to suggest a `design change`, please submit a **new issue** to:
>
> [https://github.com/devosu/research-mentorship-backend-lite/issues/new](https://github.com/devosu/research-mentorship-backend-lite/issues/new)
>
> **After** agreeing to our [CODE_OF_CONDUCT](https://github.com/devosu/research-mentorship-backend-lite/CODE_OF_CONDUCT.md)

> **TODO**: @KemingHe

### :computer: For Developers

#### :eyes: Read the Docs

Make sure you can answer these questions (and beyond) by **carefully reading the docs**:

1. Which fields should I **CREATE** at `initial sign-up` stage? And **why**?
2. Which fields should I **CREATE** at `application` stage? And **why**?
3. Which fields should I **UPDATE** at `admin review and approval` stage? And **why**?

#### :construction_worker: Try the Live Preview

> **TODO**: @KemingHe

### :tophat: For Stakeholders

> **TODO**: @KemingHe

### :wave: For Others (Welcome!!)

> **TODO**: @KemingHe

> Back to [:clipboard: Table of Contents](https://github.com/devosu/research-mentorship-backend-lite/blob/main/docs/schemas/users/v1-users-schema.md#clipboard-table-of-contents)

## :open_file_folder: `user` Fields

| **Categories** | **Fields** | **JS Types** | **Data Types** | **Search** | **Notes** |
|---|---|---|---|---|---|
| **Generic Info** |  |  |  |  |  |
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
| :x: | N/A to Search/Filter | `Nobody should search mentors by their calerdar URL.` |
| :honeybee: | [Fuzzy Search/Filter](https://en.wikipedia.org/wiki/Approximate_string_matching) | `Typos like "sciance" should resolve to match "science".` |
| :ballot_box_with_check: | Selection Filter | `Single-select, multi-select, range drag bar etc.` |

### Field Enums (Options)

| **Fields** | **Enum/Options** |
|---|---|
| userType | `mentee`, `mentor`, `admin` |
| academicYear | `freshman (1st year)`, `sophomore (2nd year)`, `junior (3rd year)`, `senior (4th year)`, plus `other (5+ year)` |
| currentMajor | `set of majors at OSU` |
| proProfessionalRoute | `set of pre-prof routes at OSU` |

> Back to [:clipboard: Table of Contents](https://github.com/devosu/research-mentorship-backend-lite/blob/main/docs/schemas/users/v1-users-schema.md#clipboard-table-of-contents)

## :busts_in_silhouette: Populating the Fields

|  |  | **User Types** | mentee | mentor | admin |
|---|---|---|---|---|---|
| **Categories** | **Fields** |  |  |  |  |
| **Generic Info** |  |  |  |  |  |
|  | id |  | :white_check_mark: :gear: | :white_check_mark: :gear: | :white_check_mark: :gear: |
|  | creationTimestamp |  | :white_check_mark: :gear: | :white_check_mark: :gear: | :white_check_mark: :gear: |
|  | userType |  | :white_check_mark: :necktie: | :white_check_mark: :necktie: | :white_check_mark: :label: |
|  | adminApproved |  | :white_check_mark: :hourglass_flowing_sand: | :white_check_mark: :hourglass_flowing_sand: | :x: |
|  | emailAddress |  | :white_check_mark: :fountain_pen: | :white_check_mark: :fountain_pen: | :white_check_mark: :label: |
|  | profilePictureLink |  | :white_check_mark: :gear: | :white_check_mark: :gear: | :white_check_mark: :gear: |
| **Academic Info** |  |  |  |  |  |
|  | firstName |  | :white_check_mark: :fountain_pen: | :white_check_mark: :fountain_pen: | :white_check_mark: :label: |
|  | lastName |  | :white_check_mark: :fountain_pen: | :white_check_mark: :fountain_pen: | :white_check_mark: :label: |
|  | academicYear |  | :white_check_mark: :fountain_pen: | :white_check_mark: :fountain_pen: | :x: |
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
| :x: | Field is **NOT** relevant and `null` | `Mentees cannot have scheduling links.` |
| :gear: | Field is auto-generated | `All users are timestamped at account creation.` |
| :label: | Field is pre-set by other **Admins** | `Admin credentials are pre-determined.` |
| :fountain_pen: | Field is filled out during **Initial Sign-up** | `New mentees use their email to sign up.` |
| :necktie: | Field is filled out during **Application** | `New mentors describe their research during application.` |
| :hourglass_flowing_sand: | Field is set by **Admins** after **Review** | `New mentors are assigned a scheduling link after approval.` |

> [!IMPORTANT]
> As best practice to user-retention, limit between **3** to **5** fields per input session (`initial sign-up` and `application`). Use the different icons as guidance.
>
> *For example, users should **NOT** be asked to fill both :fountain_pen: AND :necktie: fields at `initial sign-up`. (When was the last time you felt great after filling **9** whole sections in a survey?)*
>
> Also **REMEMBER** to let user update their relevant fields whenever they wish. :sunflower:

> Back to [:clipboard: Table of Contents](https://github.com/devosu/research-mentorship-backend-lite/blob/main/docs/schemas/users/v1-users-schema.md#clipboard-table-of-contents)
