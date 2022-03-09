export default function clientMiddleware(client: any) {
	return ({ dispatch, getState }: any) => {
		return (next: any) => (action: any) => {
			if (typeof action === "function") {
				return action(dispatch, getState);
			}

			const { promise, types, ...rest } = action; // eslint-disable-line no-redeclare
			if (!promise) {
				return next(action);
			}

			const [REQUEST, SUCCESS, FAILURE] = types;
			next({ ...rest, type: REQUEST });

			const actionPromise = promise(client);
			actionPromise
				.then(
					(result: object) => next({ ...rest, result, type: SUCCESS }),
					(error: object) => next({ ...rest, error, type: FAILURE })
				)
				.catch((error: object) => {
					console.error("MIDDLEWARE ERROR:", error);
					next({ ...rest, error, type: FAILURE });
				});

			return actionPromise;
		};
	};
}
