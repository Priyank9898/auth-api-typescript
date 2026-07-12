import { Request, Response } from "express";
import { signupPayloadModel } from "./models";

class AuthenticationController {
  public async handleSignup(req: Request, res: Response) {
    const validateResult = await signupPayloadModel.safeParseAsync(req.body);
    if (!validateResult.success) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: validateResult.error.flatten().fieldErrors,
      });
    }
  }
}

export default AuthenticationController;
