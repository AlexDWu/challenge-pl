#PixleeChallenge

massage, cache, and deliver Instagram media based on tags and time window.

##Data Schema

### Media

| Field              | Type                        | Description                    |
| ------------------ | --------------------------- | ------------------------------ |
| id                 | varchar(255), primary key   | Media ID from Instagram        |
| tag_id             | int, foriegn key (tags)     | Index of tag                   |
| low_res_image      | varchar(255)                | URL to low res image           |
| thumbnail          | varchar(255)                | URL to thumbnail image         |
| standard_res_image | varchar(225)                | URL to standard res image      |
| link               | varchar(225)                | URL to Instagram page          |
| user_name          | varchar(225)                | User who posted this item      |
| user_id            | int                         | User's ID                      |
| time_tagged        | datetime                    | Time the item was first tagged |
| type               | varchar(255)                | Video or image                 |

### Tags

| Field              | Type               | Description                     |
| ------------------ | ------------------ | ------------------------------- |
| id                 | int, primary key   | Tag ID from Instagram           |
| name               | varchar(255)       | Tag name/text                   |
| min_tag_id         | varchar(255)       | Latest page                     |
| max_tag_id         | varchar(255)       | Earliest page                   |
| lastest_timestamp  | datetime           | time of the latest media item   |
| earilest_timestamp | datetime           | time of the earliest media item |

The set of saved media information falls between min_tag_id and max_tag_id. If a request requires items before earliest_timestamp, then the server will query Instagram for items after max_tag_id. If the request requires items after latest_timestamp, then the server will query instagram for items before min_tag_id.
