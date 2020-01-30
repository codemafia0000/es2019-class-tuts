document.addEventListener('DOMContentLoaded', () => {
    const es = new ES2019Extended();
    es.printVersion();
});

class ES2019 {

    #version = 2019;

    set version(val) {
        this.#version = val;
    }

    get version() {
        return this.#version;
    }

    #increment() {
        this.#version++;
    }
    
    printVersion() {
        this.#increment();
        console.debug(`%cHi, my version is %c${this.#version}`, 'font-size:2em; color: red; font-weight: 600;', 'display:inline; font-size:2em; color: green; font-weight: 600;');
    }
}

class ES2019Extended extends ES2019 {
    printVersion() {
        console.debug(`%cHi, my version is %c${this.version}`, 'font-size:2em; color: red; font-weight: 600;', 'display:inline; font-size:2em; color: green; font-weight: 600;');
    }
}
