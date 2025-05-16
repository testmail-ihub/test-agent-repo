/**
 * Utility functions for debouncing, throttling, deep cloning, and checking empty objects.
 */

// Debounce function to delay execution of a function until after a specified time has passed since the last time it was invoked.
const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
};

// Throttle function to limit the number of times a function can be invoked over time.
const throttle = (func, limit) => {
    let lastFunc;
    let lastRan;
    return (...args) => {
        if (!lastRan) {
            func.apply(this, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(() => {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(this, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
};

// Deep clone function to create a copy of an object, including nested objects and arrays.
const deepClone = (obj) => {
    if (typeof obj !== 'object' || obj === null) return obj;
    if (Array.isArray(obj)) {
        return obj.map(deepClone);
    }
    const clone = {};
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            clone[key] = deepClone(obj[key]);
        }
    }
    return clone;
};

// Check if an object is empty.
const isEmptyObject = (obj) => {
    return Object.keys(obj).length === 0 && typeof obj === 'object';
};

// Exporting utility functions for use in other modules.
export { debounce, throttle, deepClone, isEmptyObject };