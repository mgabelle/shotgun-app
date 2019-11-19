export class ServiceRoutes {
    public static BASE_API_URL() {
        return 'http://localhost:8080/api';
    }
}

export class ShotgunRoutes {
    private static BASE_SHOTGUN_URL() {
        return `${ServiceRoutes.BASE_API_URL()}/shotguns`;
    }

    public static GET_SHOTGUNS() {
        return ShotgunRoutes.BASE_SHOTGUN_URL();
    }

    public static GET_SHOTGUN_BY_ID(id: number) {
        return `${ShotgunRoutes.BASE_SHOTGUN_URL()}/${id}`;
    }

    public static POST_SHOTGUNS() {
        return ShotgunRoutes.BASE_SHOTGUN_URL();
    }
}
