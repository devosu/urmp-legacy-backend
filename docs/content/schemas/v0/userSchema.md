# :bust_in_silhouette: `User` Schema

Our [Flat-File](https://www.geeksforgeeks.org/flat-file-database/#) design is based on the fact that each `User` in the system will only have **ONE** set of generic info, **ONE** set of academic info, plus **ONE** set of research info. Therefore, we can store all necessary fields directly in each `User` document.

## :open_file_folder: `User` Fields

| **Categories** | **Fields** | **JS Types** | **Data Types** | **Search** | **Filter By** |
|---|---|---|---|---|---|
| **Generic Info** |  |  |  |  |  |
|  | **id** | `string` | uuid \* | :closed_lock_with_key: | exact |
|  | **creationTimestamp** | `string` | datetime | :closed_lock_with_key: | asc/descend |
|  | **userType** | `string` | enum | :closed_lock_with_key: | single-select |
|  | **adminProved** | `boolean` | boolean | :closed_lock_with_key: | true/false/all |
|  | **emailAddress** | `string` | email | :closed_lock_with_key: :honeybee: | substring |
|  | **profilePictureLink** | `string` | url | :x: | :x: |
| **Academic Info** |  |  |  |  |  |
|  | **firstName** | `string` | string | :honeybee: | substring |
|  | **lastName** | `string` | string | :honeybee: | substring |
|  | **proficientLanguages** | `string[]` | enum array | :ballot_box_with_check: | multi-select |
|  | **academicYear** | `string` | enum | :ballot_box_with_check: | multi-select |
|  | **currentMajor** | `string` | enum | :honeybee: | substring |
|  | **preProfessionalRoute** | `string` | enum | :ballot_box_with_check: | multi-select |
| **Research Info** |  |  |  |  |  |
|  | **currentResearchFields** | `string[]` | string array | :honeybee: | substring |
|  | **currentResearchDescription** | `string` | paragraph | :honeybee: | substring |
|  | **desiredResearchFields** | `string[]` | string array | :honeybee: | substring |
|  | **calendarSchedulingLink** | `string` | url | :x: | :x: |

> \* "uuid" represents "[Universally Unique Identifier](en.wikipedia.org/wiki/Universially_unique_identifier)".

### :mag: Search Legend

| **Icons** | **Meanings** | **Examples** |
|---|---|---|
| :closed_lock_with_key: | Admin Access Only | `Only admins can search users by internal ID.` |
| :x: | N/A to Search/Filter | `Nobody should search mentors by their calerdar URL.` |
| :honeybee: | [Fuzzy Search/Filter](https://en.wikipedia.org/wiki/Approximate_string_matching) | `Typos like "pysics" should resolve to matching "physics".` |
| :ballot_box_with_check: | Selection Filter | `Single-select, multi-select, range drag bar etc.` |

### :memo: Field Enums

| **Fields** | **Enum** |
|---|---|
| userType | `Admin`, `NewSignup`, `Mentee`, and `Mentor` |
| proficientLanguages | `searchable set of all world languages in the format of "Japanese - 日本語"`
| academicYear | `High School`, `Freshman (1st Year)`, `Sophomore (2nd Year)`, `Junior (3rd Year)`, `Senior (4th Year)`, and `SuperSenior (5+ Years)` |
| currentMajor | [`searchable set of all majors at The Ohio State University`](https://undergrad.osu.edu/majors-and-academics/majors) |
| proProfessionalRoute | [`searchable set of all pre-professional routes at The Ohio State University`](https://undergrad.osu.edu/majors-and-academics/majors) |

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
|  | proficientLanguages |  | :x: | :white_check_mark: :necktie: | :x: |
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
|:---:|:---|:---|
| :white_check_mark: | Field **IS** relevant | All users must be one of four userTypes. |
| :grey_question: | Field is [nullable](https://en.wikipedia.org/wiki/Nullable_type) | A mentor may have a pre-prof route, i.e. `Pre-Medicine`. |
| :x: | Field is **NOT** relevant | A mentee cannot have a calendar scheduling link. |
| :gear: | Field is auto-generated | All users are timestamped at account creation. |
| :label: | Field is pre-set into the system | Admins and admin credentials are pre-determined. |
| :fountain_pen: | Field is filled during **Registration** | A new user registers with their OSU student email. |
| :necktie: | Field is filled  during **Application** | A new mentor describes their research at application. |
| :hourglass_flowing_sand: | Field is set by **Admins** after **Review** | An admin assigns a scheduling link to a mentor. |

> [!IMPORTANT]
> For better user-retention, limit **3~5** fields per stage (`Registration` and `Application`). Use the different icons as guidance.
>
> > *For example, users should **NOT** be asked to fill both :fountain_pen: AND :necktie: fields at `Registration`. (When was the last time you felt great after filling **9+** sections in a survey?)*
