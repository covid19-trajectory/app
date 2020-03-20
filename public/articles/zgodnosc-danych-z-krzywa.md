# Miary zgodności danych z krzywą

Various measures are provided to quantify how well the curve-fit models the data.

AIC
AIC is Akaike's Information Criterion; this provides an estimate of the quality of the curve-fitting model for comparison against other models.

AIC can be used to compare curve-fitting models and determine which is the best. The model with the lowest AIC value is most likely to be correct. AIC will favour simpler curve-fitting models over those with more parameters (it achieves this by applying a penalty proportional to the number of parameters).

AICc
AICc is Akaike's Information Criterion corrected for small sample sizes. Use this method instead of AIC when comparing curve-fitting models for smaller sample sizes (number of calibrators). Note, this method is only applicable when the number of calibrators is at least two greater than the number of parameters.

BIC
BIC is Bayesian Information Criterion; this is very similar to AIC. The key difference is that BIC imposes a higher penalty for the number of parameters in the model.

DWS
DWS is the Durbin-Watson Statistic; this is used to detect the presence of autocorrelation (at lag 1) in the residuals of the regression.

DWS values range between 0 and 4. A value close to zero indicates a positive autocorrelation between the residuals. A value close to 4 indicates a negative autocorrelation between the residuals. A value around 2 indicates there is no significant auto-correlation.

F
F is the F-statistic.

F is the ratio of the variance explained by the curve-fitting model to the residual variance.

P
P is the P-value. P is the significance of the model as a probability. It is the P-value of F for the curve-fitting model. This compares the variance attributed to the model with the variance of the residual.

R²
R² is 1 minus the ratio of sum of the squares of the residuals divided by the sum of the squares of the differences between Y fit and the mean Y value).

This will equal 1 for a perfect fit and tend towards 0 for a bad fit.

In other words, R² is the ratio of variation that is explained by the curve-fitting model to the total variation in the model.

In most situations, irreducible errors in measurement will prevent the model from explaining all the variation. Models using a larger set of factors may produce an R² value that is closer to 1. However, it may be that the additional factors are essentially modelling noise.

aR²
aR² is the adjusted R² value.

aR² is R² adjusted downward to compensate for over fitting. The larger the number of independent variables is (compared to the number of observations), the lower the adjusted R² value will be. When using curve-fitting models with a larger number of independent variables, the additional variables may be simply modelling noise.

RMS
RMS is the root-mean-square.

SE
SE is the standard error. The standard error is the root-mean-square of the residuals.
