// screens/ProfileScreen.js
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EncryptedStorage from "react-native-encrypted-storage";
import DateTimePicker from "@react-native-community/datetimepicker";
import LinearGradient from "react-native-linear-gradient";
import COLORS from "../constants/colors";

export default function ProfileScreen() {
  const [courses, setCourses] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [readingTime, setReadingTime] = useState("");

  const [courseCode, setCourseCode] = useState("");
  const [courseDesc, setCourseDesc] = useState("");
  const [courseTime, setCourseTime] = useState(new Date());

  const [assignmentTitle, setAssignmentTitle] = useState("");
  const [assignmentDue, setAssignmentDue] = useState(new Date());

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [pickerMode, setPickerMode] = useState("date");

  // ✅ Load data from secure storage
  useEffect(() => {
    const loadData = async () => {
      try {
        const stored = await EncryptedStorage.getItem("profile_data");
        if (stored) {
          const parsed = JSON.parse(stored);
          setCourses(parsed.courses || []);
          setAssignments(parsed.assignments || []);
          setReadingTime(parsed.readingTime || "");
        }
      } catch (e) {
        console.log("Load error:", e);
      }
    };
    loadData();
  }, []);

  // ✅ Save data securely
  const saveData = async (newCourses, newAssignments, newReadingTime) => {
    try {
      const payload = {
        courses: newCourses ?? courses,
        assignments: newAssignments ?? assignments,
        readingTime: newReadingTime ?? readingTime,
      };
      await EncryptedStorage.setItem("profile_data", JSON.stringify(payload));
    } catch (e) {
      console.log("Save error:", e);
    }
  };

  // ✅ Add Course
  const handleAddCourse = () => {
    if (!courseCode || !courseDesc) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    const formattedCode = courseCode.toUpperCase();
    const newCourse = { code: formattedCode, desc: courseDesc, time: courseTime.toISOString() };
    const updatedCourses = [...courses, newCourse];

    setCourses(updatedCourses);
    saveData(updatedCourses, null, null);

    Alert.alert("✅ Success", "Course uploaded successfully!");
    setCourseCode("");
    setCourseDesc("");
  };

  // ✅ Add Assignment
  const handleAddAssignment = () => {
    if (!assignmentTitle) {
      Alert.alert("Error", "Please enter assignment title");
      return;
    }

    const newAssignment = { title: assignmentTitle, due: assignmentDue.toISOString() };
    const updatedAssignments = [...assignments, newAssignment];

    setAssignments(updatedAssignments);
    saveData(null, updatedAssignments, null);

    Alert.alert("✅ Success", "Assignment uploaded successfully!");
    setAssignmentTitle("");
  };

  // ✅ Save Reading Time
  const handleSaveReading = () => {
    if (!readingTime) {
      Alert.alert("Error", "Enter a reading schedule");
      return;
    }
    saveData(null, null, readingTime);
    Alert.alert("✅ Saved", "Reading time updated!");
  };

  // ✅ Clear All Data
  const clearAll = async () => {
    try {
      await EncryptedStorage.removeItem("profile_data");
      setCourses([]);
      setAssignments([]);
      setReadingTime("");
      Alert.alert("🗑 Cleared", "All stored data removed");
    } catch (e) {
      console.log("Clear error:", e);
    }
  };

  // ✅ DateTime picker handler
  const onDateTimeChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      pickerMode === "time" ? setCourseTime(selectedDate) : setAssignmentDue(selectedDate);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>👤 Profile & Academics</Text>

      {/* --- Add Course --- */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>➕ Add Course</Text>
        <TextInput
          style={styles.input}
          placeholder="Course Code (e.g. CIE 101)"
          value={courseCode}
          onChangeText={setCourseCode}
          autoCapitalize="characters"
        />
        <TextInput
          style={styles.input}
          placeholder="Course Description"
          value={courseDesc}
          onChangeText={setCourseDesc}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setPickerMode("time");
            setShowDatePicker(true);
          }}
        >
          <Text style={styles.buttonText}>Pick Class Time</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleAddCourse}>
          <LinearGradient colors={["#004d99", "#007bff"]} style={styles.gradientBtn}>
            <Text style={styles.buttonText}>Save Course</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {/* --- Add Assignment --- */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>📝 Add Assignment</Text>
        <TextInput
          style={styles.input}
          placeholder="Assignment Title"
          value={assignmentTitle}
          onChangeText={setAssignmentTitle}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setPickerMode("datetime");
            setShowDatePicker(true);
          }}
        >
          <Text style={styles.buttonText}>Pick Due Date</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleAddAssignment}>
          <LinearGradient colors={["#ff6600", "#ff9900"]} style={styles.gradientBtn}>
            <Text style={styles.buttonText}>Save Assignment</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {/* --- Reading Time --- */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>📖 Reading Time</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. 8PM - 10PM"
          value={readingTime}
          onChangeText={setReadingTime}
        />
        <TouchableOpacity onPress={handleSaveReading}>
          <LinearGradient colors={["#388e3c", "#4caf50"]} style={styles.gradientBtn}>
            <Text style={styles.buttonText}>Save Reading</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {/* --- Display List --- */}
      <FlatList
        data={[...courses, ...assignments]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.listItem}>
            {item.code
              ? `${item.code} - ${item.desc} @ ${new Date(item.time).toLocaleTimeString()}`
              : `${item.title} (Due: ${new Date(item.due).toLocaleString()})`}
          </Text>
        )}
      />

      {/* --- Clear Button --- */}
      <TouchableOpacity onPress={clearAll}>
        <Text style={[styles.buttonText, { color: "red", marginTop: 20 }]}>🗑 Clear All Data</Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={new Date()}
          mode={pickerMode}
          onChange={onDateTimeChange}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: COLORS.lightGray },
  title: { fontSize: 24, fontWeight: "bold", color: COLORS.primary, marginBottom: 15 },
  card: { backgroundColor: COLORS.white, padding: 15, borderRadius: 12, marginBottom: 20, elevation: 2 },
  sectionTitle: { fontSize: 18, fontWeight: "600", marginBottom: 10, color: COLORS.textPrimary },
  input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 10, marginBottom: 10 },
  button: { marginVertical: 10 },
  gradientBtn: { borderRadius: 8, padding: 12, alignItems: "center" },
  buttonText: { color: "#fff", fontWeight: "bold" },
  listItem: { fontSize: 16, paddingVertical: 6, borderBottomWidth: 0.5, borderColor: "#ddd" },
});
