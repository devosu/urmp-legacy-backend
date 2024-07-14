# :handshake: Integration Flow

How DEV's Research Mentorship `frontend`[^1] requests gets gracefully handled by the `backend`[^2].

[^1]: Research Mentorhip frontend (public) GitHub repository: [https://github.com/devosu/research-mentorship-frontend](https://github.com/devosu/research-mentorship-frontend)
[^2]: Research Mentorhip backend lite (public) GitHub repository: [https://github.com/devosu/research-mentorship-backend-lite](https://github.com/devosu/research-mentorship-backend-lite)

## :world_map: Something

TODO

## :globe_with_meridians: Request Processing

### :open_book: `CRUD` and `http` Breakdown

| **`CRUD` Operations** |  | **<ins>C</ins>REATE** | **<ins>R</ins>EAD** | **<ins>U</ins>PDATE** | **<ins>D</ins>ELETE** |
|:---|:---|:---:|:---:|:---:|:---:|
| **`http` Requests** |  | `POST` | `GET` | `PUT` | `DELETE` |
| **Scenarios** | :lock: Not Signed-in | `403` | `403` | `403` | `403` |
|  | :old_key: Not Allowed | :x: | `401` | `401` | `401` |
|  | :no_good: Invalid `req.body` | `400` | `400` | `400` | `400` |
|  | :grey_question: Not Found | :x: | `404` | `404` | `404` |
|  | :construction: Route WIP | `501` | `501` | `501` | `501` |
|  | :fire: Server Fault | `503` | `503` | `503` | `503` |
|  | :white_check_mark: **Success** | `201` | `200` | `200` | `204` |

> ":x:" represents "Not Applicable" in the scenario.

### :chains: Step Process

| Steps | Checks |  | Resolution |
|:---:|:---:|:---:|:---:|
| 0 | Incoming `http` request |  |  |
|  | :arrow_down: |  |  |
| 1 | Is the request from [`frontend`](https://research.osu.dev)? | NO :arrow_right: | `403` |
|  | YES :arrow_down: |  |  |
| 2 | Is the request `header` valid? | NO :arrow_right: | `401` |
|  | YES :arrow_down: |  |  |
| 3 | Is the request `body` valid? | NO :arrow_right: | `400` or `404` |
|  | YES :arrow_down: |  |  |
| 4 | Is the request handled successfully? | NO :arrow_right: | `501` or `503` |
|  | YES :arrow_down: |  |  |
| 5 | `200` or `201` or `204` |  | |

### :memo: `http` Legend

| **Code** | **Status** | **Explanation** |
|:---|:---|:---|
| `200` | `OK` | Successfully **READ** or **UPDATED** user record(s). **\*** |
| `201` | `Created` | Successfully **CREATED** and added a new user record. |
| `204` | `No Content` | Successfully **DELETED** an existing user record. |
| `400` | `Bad Request` | I.e. cannot update research info of an `Admin` user. |
| `401` | `Unauthorized` | I.e. a `NewSignup` user cannot delete other's records. |
| `403` | `Forbidden` | Request **must** be from then [`frontend`](https://research.osu.dev) to be processed. |
| `404` | `Not Found` | The requested route or resource or service does not exist. |
| `501` | `Not Implemented` | The requested route is planned, but not yet implemented. |
| `503` | `Service Unavailable` | Backend is under maintenance and temporarily down. |

> **\*** The terms "record" and "document" are used interchangeably here.


