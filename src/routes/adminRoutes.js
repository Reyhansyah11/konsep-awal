import express from "express";
import {
  createGallery,
  updateGallery,
  getGalleryById,
  deleteGallery,
  getAllGalleries,
  createTopProject,
  getTopProjectById,
  updateTopProject,
  deleteTopProject,
  getAllTopProjects
} from "../controllers/AdminController.js"; // Pastikan path ini benar
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";

const router = express.Router();

// Rute untuk galeri
router.post("/gallery", authMiddleware, adminMiddleware, createGallery);
router.put("/gallery/:id", authMiddleware, adminMiddleware, updateGallery);
router.get("/gallery/:id", authMiddleware, adminMiddleware, getGalleryById);
router.delete("/gallery/:id", authMiddleware, adminMiddleware, deleteGallery);
router.get("/galleries", authMiddleware, adminMiddleware, getAllGalleries);

// Rute untuk proyek top
router.post("/top-project", authMiddleware, adminMiddleware, createTopProject);
router.get(
  "/top-project/:id",
  authMiddleware,
  adminMiddleware,
  getTopProjectById
);
router.put(
  "/top-project/:id",
  authMiddleware,
  adminMiddleware,
  updateTopProject
);
router.delete(
  "/top-project/:id",
  authMiddleware,
  adminMiddleware,
  deleteTopProject
);
router.get("/top-projects", authMiddleware, adminMiddleware, getAllTopProjects);

export default router;
