import mongoose, { Schema } from "mongoose";

const UserSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
        },
        profileImage: {
            type: String,
            reqired: false,
            default: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpng.pngtree.com%2Fpng-vector%2F20190710%2Fourlarge%2Fpngtree-user-vector-avatar-png-image_1541962.jpg&f=1&nofb=1&ipt=9b3c0027f028cc337a69c3020b8a3f47d9c53ec7c1d779cc6adf8fdf39690b60&ipo=images"
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        roles: {
            type: [Schema.Types.ObjectId],
            required: true,
            ref: "Role"
        }

    },
    {
        timestamps: true
    }
);

export default mongoose.model("User", UserSchema);