// Auto bind decorator:
export function AutoBind(target, methodName, descriptor) {
    const originalMethod = descriptor.value;
    const adjustedDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const bindFunction = originalMethod.bind(this);
            return bindFunction;
        }
    };
    return adjustedDescriptor;
}
//# sourceMappingURL=auto-bind-decorator.js.map