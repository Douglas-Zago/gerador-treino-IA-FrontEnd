import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Loader2, Dumbbell, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

interface WorkoutFormData {
  objective: string;
  trainingDays: string[];
  equipment: string;
  restTime: string;
  height: string;
  weight: string;
  gender: string;
  age: string;
}

export const WorkoutForm = () => {
  const { theme, setTheme } = useTheme();
  const [formData, setFormData] = useState<WorkoutFormData>({
    objective: "",
    trainingDays: [],
    equipment: "",
    restTime: "",
    height: "",
    weight: "",
    gender: "",
    age: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [workoutPlan, setWorkoutPlan] = useState<string>("");

  const daysOfWeek = [
    "Segunda-feira",
    "Terça-feira", 
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
    "Domingo"
  ];

  const handleDayChange = (day: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      trainingDays: checked 
        ? [...prev.trainingDays, day]
        : prev.trainingDays.filter(d => d !== day)
    }));
  };

  const handleSubmit = async () => {
    if (!formData.objective || formData.trainingDays.length === 0 || !formData.equipment || !formData.restTime || !formData.height || !formData.weight || !formData.gender || !formData.age) {
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulate API call for now
      setTimeout(() => {
        setWorkoutPlan(`
**PLANO DE TREINO PERSONALIZADO**

**Objetivo:** ${formData.objective}
**Dias de Treino:** ${formData.trainingDays.join(", ")}
**Equipamentos:** ${formData.equipment}
**Descanso entre séries:** ${formData.restTime}
**Perfil:** ${formData.gender}, ${formData.age} anos, ${formData.height}cm, ${formData.weight}kg

**SEGUNDA-FEIRA - Treino A**
• Agachamento - 3x12
• Flexão de braço - 3x10
• Prancha - 3x30s

**QUARTA-FEIRA - Treino B**
• Burpees - 3x8
• Mountain climbers - 3x15
• Polichinelo - 3x20

**SEXTA-FEIRA - Treino C**
• Lunges - 3x10 cada perna
• Abdominais - 3x15
• Ponte glútea - 3x12

*Lembre-se de sempre fazer aquecimento antes e alongamento após o treino!*
        `);
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      console.error("Erro ao gerar treino:", error);
      setIsLoading(false);
    }
  };

  const isFormValid = formData.objective && formData.trainingDays.length > 0 && formData.equipment && formData.restTime && formData.height && formData.weight && formData.gender && formData.age;

  return (
    <div className="min-h-screen bg-gradient-subtle py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Theme Toggle */}
        <div className="flex justify-end mb-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="bg-background/80 hover:bg-background"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-primary rounded-full shadow-primary">
              <Dumbbell className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Gerador de Plano de Treino Inteligente
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha suas preferências e os dias da semana para montar seu treino personalizado
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Form Card */}
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="text-2xl">Suas Preferências</CardTitle>
              <CardDescription>
                Preencha os campos abaixo para gerar seu plano personalizado
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Objective */}
              <div className="space-y-2">
                <Label htmlFor="objective" className="text-base font-medium">
                  Qual é o seu principal objetivo?
                </Label>
                <Select value={formData.objective} onValueChange={(value) => 
                  setFormData(prev => ({ ...prev, objective: value }))
                }>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Selecione seu objetivo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hipertrofia">Hipertrofia (Ganho de Massa Muscular)</SelectItem>
                    <SelectItem value="emagrecimento">Emagrecimento (Queima de Gordura)</SelectItem>
                    <SelectItem value="resistencia">Resistência e Condicionamento</SelectItem>
                    <SelectItem value="manutencao">Manutenção da Saúde</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Training Days */}
              <div className="space-y-3">
                <Label className="text-base font-medium">
                  Quais dias da semana você vai treinar?
                </Label>
                <div className="grid grid-cols-2 gap-3">
                  {daysOfWeek.map((day) => (
                    <div key={day} className="flex items-center space-x-2">
                      <Checkbox 
                        id={day}
                        checked={formData.trainingDays.includes(day)}
                        onCheckedChange={(checked) => handleDayChange(day, !!checked)}
                      />
                      <Label htmlFor={day} className="text-sm cursor-pointer">
                        {day}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Equipment */}
              <div className="space-y-2">
                <Label htmlFor="equipment" className="text-base font-medium">
                  Quais equipamentos você tem acesso?
                </Label>
                <Select value={formData.equipment} onValueChange={(value) => 
                  setFormData(prev => ({ ...prev, equipment: value }))
                }>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Selecione os equipamentos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="peso-corporal">Nenhum (Apenas Peso Corporal)</SelectItem>
                    <SelectItem value="halteres-elasticos">Halteres e Elásticos</SelectItem>
                    <SelectItem value="academia-completa">Academia Completa</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Rest Time */}
              <div className="space-y-2">
                <Label htmlFor="restTime" className="text-base font-medium">
                  Qual o tempo de descanso ideal entre as séries?
                </Label>
                <Select value={formData.restTime} onValueChange={(value) => 
                  setFormData(prev => ({ ...prev, restTime: value }))
                }>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Selecione o tempo de descanso" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30s">30 segundos</SelectItem>
                    <SelectItem value="45s">45 segundos</SelectItem>
                    <SelectItem value="60s">60 segundos</SelectItem>
                    <SelectItem value="90s">90 segundos</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Personal Info */}
              <div className="space-y-4 pt-4 border-t">
                <h3 className="text-lg font-semibold">Informações Pessoais</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="height" className="text-base font-medium">
                      Altura (cm)
                    </Label>
                    <Input
                      id="height"
                      type="number"
                      placeholder="Ex: 175"
                      value={formData.height}
                      onChange={(e) => setFormData(prev => ({ ...prev, height: e.target.value }))}
                      className="h-12"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="weight" className="text-base font-medium">
                      Peso (kg)
                    </Label>
                    <Input
                      id="weight"
                      type="number"
                      placeholder="Ex: 70"
                      value={formData.weight}
                      onChange={(e) => setFormData(prev => ({ ...prev, weight: e.target.value }))}
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="gender" className="text-base font-medium">
                      Sexo
                    </Label>
                    <Select value={formData.gender} onValueChange={(value) => 
                      setFormData(prev => ({ ...prev, gender: value }))
                    }>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Selecione o sexo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="masculino">Masculino</SelectItem>
                        <SelectItem value="feminino">Feminino</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="age" className="text-base font-medium">
                      Idade
                    </Label>
                    <Input
                      id="age"
                      type="number"
                      placeholder="Ex: 25"
                      value={formData.age}
                      onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
                      className="h-12"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <Button 
                onClick={handleSubmit}
                disabled={!isFormValid || isLoading}
                className="w-full h-12 text-lg font-medium bg-gradient-primary hover:opacity-90 transition-smooth shadow-primary"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Gerando seu treino...
                  </>
                ) : (
                  "Gerar Meu Treino"
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Result Card */}
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="text-2xl">Seu Plano de Treino</CardTitle>
              <CardDescription>
                Seu plano personalizado aparecerá aqui
              </CardDescription>
            </CardHeader>
            <CardContent>
              {workoutPlan ? (
                <div className="prose prose-sm max-w-none">
                  <pre className="whitespace-pre-wrap text-sm leading-relaxed font-sans">
                    {workoutPlan}
                  </pre>
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <Dumbbell className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Seu plano de treino personalizado aparecerá aqui.</p>
                  <p className="text-sm mt-2">Preencha o formulário e clique em "Gerar Meu Treino"</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};