class ApiReturnedError extends Error {
    constructor(message) {
        super(message || "The API returned an error"); 
        this.name = "ApiReturnedError"; 
        Error.captureStackTrace(this, this.constructor);
        this.status = 503;
    }
}

class NoRouteFound extends Error {
    constructor(message) {
        super(message || "No route found."); 
        this.name = "NoRouteFound"; 
        Error.captureStackTrace(this, this.constructor);
        this.status = 404;
    }
}

class NoResourceFound extends Error {
    constructor(message) {
        super(message || "Resource not found."); 
        this.name = "NoResourceFound"; 
        Error.captureStackTrace(this, this.constructor);
        this.status = 404;
    }
}

class ResourceAlreadyExists extends Error {
    constructor(message) {
        super(message || "Resource already exists."); 
        this.name = "ResourceAlreadyExists"; 
        Error.captureStackTrace(this, this.constructor);
        this.status = 409;
    }
}

class AuthenticationError extends Error {
    constructor(message) {
        super(message || "Request is missing required authentication credential."); 
        this.name = "AuthenticationError"; 
        Error.captureStackTrace(this, this.constructor);
        this.status = 401;
    }
}

class ValidationError extends Error {
    constructor(message) {
        super(message || "Not a valid request."); 
        this.name = "ValidationError"; 
        Error.captureStackTrace(this, this.constructor);
        this.status = 400;
    }
}

module.exports = {
    ApiReturnedError,
    NoRouteFound,
    NoResourceFound,
    ResourceAlreadyExists,
    AuthenticationError,
    ValidationError,
}