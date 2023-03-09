/* In this kata we are going to mimic a software versioning system.

You have to implement a vm function returning an object.

It should accept an optional parameter that represents the initial version. The input will be in one of the following formats: 
"{MAJOR}", "{MAJOR}.{MINOR}", or "{MAJOR}.{MINOR}.{PATCH}". 

More values may be provided after PATCH but they should be ignored. 
If these 3 parts are not decimal values, an exception with the message "Error occured while parsing version!" should be thrown.
If the initial version is not provided or is an empty string, use "0.0.1" by default.

This class should support the following methods, all of which should be chainable (except release):

major() - increase MAJOR by 1, set MINOR and PATCH to 0
minor() - increase MINOR by 1, set PATCH to 0
patch() - increase PATCH by 1
rollback() - return the MAJOR, MINOR, and PATCH to their values before the previous major/minor/patch call, 
or throw an exception with the message "Cannot rollback!" if there's no version to roll back to. 
Multiple calls to rollback() should be possible and restore the version history
release() - return a string in the format "{MAJOR}.{MINOR}.{PATCH}"
May the binary force be with you!*/

class VersionManager {
    constructor(initialVersion = "0.0.1"){
        if (initialVersion === '') {
            initialVersion = "0.0.1"
            this._major = 0;
            this._minor = 0;
            this._patch = 1;
        }else {
            const [major, minor, patch] = initialVersion.split('.');
            const testRegex = /^-?\d+$/;
            if (!testRegex.test(major) || !testRegex.test(minor) || !testRegex.test(patch)) {
                throw new Error("Error occured while parsing version!");
            }
            this._major = parseInt(major);
            this._minor = parseInt(minor);
            this._patch = parseInt(patch);
        }

        this._versionHistory = [initialVersion];
    }

    major() {
        this._major ++;
        this._minor = 0; 
        this._patch = 0;
        return this;
    }

    minor() {
        this._minor ++;
        this._patch = 0;
        return this;
    }

    patch() {
        this._patch ++;
        return this;
    }

    rollback() {
        if (this._versionHistory.length <= 1) {
            throw new Error('Cannot rollback!')
        }
        this._versionHistory.pop();
        const [major, minor, patch] = this._versionHistory.at(-1).split('.');
        this._major = parseInt(major);
        this._minor = parseInt(minor);
        this._patch = parseInt(patch);
        return this;
    }

    release() {
        const newVersion = [this._major, this._minor, this._patch].join('.');
        if (newVersion === this._versionHistory.at(-1)) {

        } else {
            this._versionHistory.push(newVersion);
        }
        return newVersion;
    }
} 

const vm = (initialVersion) => new VersionManager(initialVersion);

const version = "1.2.3.4";

console.log(vm().release()) // '0.0.1', 'Default initial version');
console.log(vm('').release()) // '0.0.1', 'Default initial version');
console.log(vm('1.2.3').release()) // '1.2.3', 'No version changes');
console.log(vm('1.2.3.4').release()) // '1.2.3', 'No version changes');
console.log(vm('1.2.3.d').release()) // '1.2.3', 'No version changes');
console.log(vm('1').release()) // '1.0.0', 'Default minor version is 0');
// console.log(vm('1.1').release())




