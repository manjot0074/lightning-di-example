({
	executeAction: function executeAction(action) {
		return new Promise($A.getCallback(function(resolve, reject) {
			action.setCallback(this, function (response) {
				var responseDto;
				var state = response.getState();
				if (state === "SUCCESS" && typeof resolve === 'function') {
					responseDto = response.getReturnValue();
					if (typeof responseDto !== "undefined" || responseDto !== null) {
						resolve(responseDto);
					} else {
						reject(Error("Something Went Wrong"));
					}
				} else if (state === "ERROR" && typeof reject === 'function') {
					var errors = response.getError();
					if (errors) {
						if (errors[0] && errors[0].message) {
							reject(Error(errors[0].message));
						}
					} else {
						reject(Error("Something Went Wrong"));
					}
				}
			});
			$A.enqueueAction(action);
		}));
    }
})