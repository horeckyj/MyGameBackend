import mongoose, { Schema } from "mongoose";

const RoleSchema = mongoose.Schema(
    {
        role: {
            type: String,
            reqiured: true
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model("Role", RoleSchema);