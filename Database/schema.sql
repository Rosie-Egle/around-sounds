-- ENUMS
CREATE TYPE "voice_type" AS ENUM (
  'GUITAR',
  'VOCAL',
  'BASS',
  'DRUMS',
  'KEYS',
  'HORN',
  'STRING'
);

-- TABLES
CREATE TABLE public.user (
    id uuid not null,
    firstName text,
    lastName text
) WITH (OIDS=FALSE);


CREATE TABLE public.band (
  "id" uuid PRIMARY KEY,
  "name" text NOT NULL,
  "created_at" timestamp,
  "user_id" uuid NOT NULL
);

ALTER TABLE "band" ADD CONSTRAINT "user_bands" FOREIGN KEY ("user_id") REFERENCES "users" ("id");

CREATE TABLE public.album (
  "id" uuid PRIMARY KEY,
  "name" text NOT NULL,
  "created_at" timestamp,
  "band_id" uuid NOT NULL,
  "user_id" uuid NOT NULL
);

ALTER TABLE "album" ADD CONSTRAINT "band_albums" FOREIGN KEY ("band_id") REFERENCES "band" ("id");

CREATE TABLE public.song (
  "id" uuid PRIMARY KEY,
  "name" text NOT NULL,
  "created_at" timestamp,
  "album_id" uuid NOT NULL,
  "user_id" uuid NOT NULL
);

ALTER TABLE "song" ADD CONSTRAINT "album_songs" FOREIGN KEY ("album_id") REFERENCES "album" ("id");


CREATE TABLE public.stereo_field (
  "id" uuid PRIMARY KEY,
  "created_at" timestamp,
  "label" text NOT NULL,
  "song_id" uuid NOT NULL,
  "user_id" uuid NOT NULL
);

ALTER TABLE "stereo_field" ADD CONSTRAINT "song_stero_fields" FOREIGN KEY ("song_id") REFERENCES "song" ("id");

CREATE TABLE public.voice (
  "id" uuid PRIMARY KEY,
  "label" text NOT NULL,
  "type" voice_type,
  "panning" integer,
  "depth" integer,
  "eq_low" integer,
  "eq_high" integer,
  "stereo_field_id" uuid NOT NULL,
  "user_id" uuid NOT NULL
);

ALTER TABLE "voice" ADD CONSTRAINT "stero_field_voices" FOREIGN KEY ("stereo_field_id") REFERENCES "stereo_field" ("id");



-- ROW LEVEL SECURITY
ALTER TABLE user ENABLE ROW LEVEL SECURITY;
ALTER TABLE band ENABLE ROW LEVEL SECURITY;
ALTER TABLE album ENABLE ROW LEVEL SECURITY;
ALTER TABLE song ENABLE ROW LEVEL SECURITY;
ALTER TABLE stereo_field ENABLE ROW LEVEL SECURITY;
ALTER TABLE voice ENABLE ROW LEVEL SECURITY;




-- POLICIES

-- USER
CREATE POLICY "Allow authenticated users to select their own data" 
ON public.user 
FOR SELECT 
TO authenticated 
USING (id = (select auth.uid()));

CREATE POLICY "Allow authenticated users to insert data" 
ON public.user 
FOR INSERT 
TO authenticated 
WITH CHECK (id = (select auth.uid()));

CREATE POLICY "Allow authenticated users to update their own data" 
ON public.user 
FOR UPDATE 
TO authenticated 
USING (id = (select auth.uid())) 
WITH CHECK (id = (select auth.uid()));

-- BAND
CREATE POLICY "User can insert their own band"
ON band FOR INSERT TO authenticated
WITH CHECK (user_id = (select auth.uid()));

CREATE POLICY "User can update their own band"
ON band FOR UPDATE TO authenticated
USING (user_id = (select auth.uid()))
WITH CHECK (user_id = (select auth.uid()));

CREATE POLICY "User can delete their own band"
ON band FOR DELETE TO authenticated
USING (user_id = (select auth.uid()));

CREATE POLICY "User can select their own band"
ON band FOR SELECT TO authenticated
USING (user_id = (select auth.uid()));

-- ALBUM
CREATE POLICY "User can insert their own album"
ON album FOR INSERT TO authenticated
WITH CHECK (user_id = (select auth.uid()));

CREATE POLICY "User can update their own album"
ON album FOR UPDATE TO authenticated
USING (user_id = (select auth.uid()))
WITH CHECK (user_id = (select auth.uid()));

CREATE POLICY "User can delete their own album"
ON album FOR DELETE TO authenticated
USING (user_id = (select auth.uid()));

CREATE POLICY "User can select their own album"
ON album FOR SELECT TO authenticated
USING (user_id = (select auth.uid()));

-- SONG
CREATE POLICY "User can insert their own song"
ON song FOR INSERT TO authenticated
WITH CHECK (user_id = (select auth.uid()));

CREATE POLICY "User can update their own song"
ON song FOR UPDATE TO authenticated
USING (user_id = (select auth.uid()))
WITH CHECK (user_id = (select auth.uid()));

CREATE POLICY "User can delete their own song"
ON song FOR DELETE TO authenticated
USING (user_id = (select auth.uid()));

CREATE POLICY "User can select their own song"
ON song FOR SELECT TO authenticated
USING (user_id = (select auth.uid()));

-- STERO FIELD
CREATE POLICY "User can insert their own stereo_field"
ON stereo_field FOR INSERT TO authenticated
WITH CHECK (user_id = (select auth.uid()));

CREATE POLICY "User can update their own stereo_field"
ON stereo_field FOR UPDATE TO authenticated
USING (user_id = (select auth.uid()))
WITH CHECK (user_id = (select auth.uid()));

CREATE POLICY "User can delete their own stereo_field"
ON stereo_field FOR DELETE TO authenticated
USING (user_id = (select auth.uid()));

CREATE POLICY "User can select their own stereo_field"
ON stereo_field FOR SELECT TO authenticated
USING (user_id = (select auth.uid()));

-- VOICE
CREATE POLICY "User can insert their own voice"
ON voice FOR INSERT TO authenticated
WITH CHECK (user_id = (select auth.uid()));

CREATE POLICY "User can update their own voice"
ON voice FOR UPDATE TO authenticated
USING (user_id = (select auth.uid()))
WITH CHECK (user_id = (select auth.uid()));

CREATE POLICY "User can delete their own voice"
ON voice FOR DELETE TO authenticated
USING (user_id = (select auth.uid()));

CREATE POLICY "User can select their own voice"
ON voice FOR SELECT TO authenticated
USING (user_id = (select auth.uid()));