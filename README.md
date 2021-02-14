# Analytics API Medium

## Data:
Example of a trade data JSON object:
```
{
    "id": 1,
    "eventType": "click",
    "user": 1,
    "date": "2020-08-29T08:48:48.737Z"
}
```
 
## Environment 
- Node Version: ^12.18.2
- Default Port: 8000

**Read Only Files**
- `test/*`

**Commands**
- run: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm start
```
- install: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm install
```
- test: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm test
```
