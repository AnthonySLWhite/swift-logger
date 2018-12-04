# Swift-Logger

Swift-Logger is a node.js log function that exports to a directory and file of your own choosing.

## Installation

Use the package manager [NPM](https://www.npmjs.com/package/@anthonywhite/swift-logger) to install Swift-Logger.

```bash
npm i @anthonywhite/swift-logger --save
```

## Usage

```javascript
import logger from '@anthonywhite/swift-logger';
const logInfo = logger('logs/info.log');
const logRequests = logger('logs/requests.log');

logInfo('What you write here is stringified to JSON!');
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
