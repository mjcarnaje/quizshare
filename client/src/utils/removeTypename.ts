export function removeTypename<T>(value: T): T {
	if (value === null || value === undefined) {
		return value;
	} else if (Array.isArray(value)) {
		return (value as any).map((v: any) => removeTypename(v));
	} else if (typeof value === 'object') {
		const newObj: Record<any, any> = {};
		Object.entries(value).forEach(([key, v]) => {
			if (key !== '__typename') {
				newObj[key] = removeTypename(v);
			}
		});
		return newObj;
	}
	return value;
}
