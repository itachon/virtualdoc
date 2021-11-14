declare module "*.vue" {
    import { createApp } from "vue";
    const component: ReturnType<typeof createApp>;
    export default component;
}