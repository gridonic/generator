export default class AppInfo {
  public appEnvironment = process.env.VUE_APP_ENVIRONMENT!;
  public appVersion = process.env.VUE_APP_VERSION!;
  public projectName = process.env.VUE_APP_PROJECT_NAME!;
  public logLevel = process.env.VUE_APP_LOG_LEVEL!;
  public sentryDsn = process.env.VUE_APP_SENTRY_DSN!;
}
